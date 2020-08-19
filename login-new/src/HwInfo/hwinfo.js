import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const HwInfo = () => {
    {
      console.log("home work info")
    //   , homeworkDetails);
    }

    const [openMediaModal,setOpenMediaModal] = useState(false);

    const MediaModal = () => {
        

      console.log(
        "Media modal now gets data"
        // currentMediaFile,
        // currentHWTitle,
        // currentMediaType
      );

      

      return (
        <Modal
          open={openMediaModal}
          onClose={handleMediaModalClose}
          aria-labelledby="Media-Modal"
          aria-describedby="Modal to play the homework media"
          className={classes.modal}
          BackdropComponent={Backdrop}
        >
          <MediaPlayerModal
            openMediaModal={openMediaModal}
            handleMediaModalClose={handleMediaModalClose}
            title={currentHWTitle}
            media={currentMediaFile}
            type={currentMediaType}
          />
        </Modal>
      );
    };

    function handleMediaModalOpen(){
        setOpenMediaModal(true);
    }

      function handleMediaModalClose(){
          setOpenMediaModal(false);
      }

    return (
      <Grid container>
        <Grid xs={12} className="homework_title_cont">
          {finalData &&
          finalData.class_subject &&
          finalData.title &&
          finalData.class_subject.grade &&
          finalData.title !== false
            ? finalData.title
            : null}
        </Grid>
        <Grid xs={12} className="homework_deadline_cont">
        Due Date: {finalData &&
          finalData.due_date
            // ? (dateOutput(finalData.due_date))
            ? ((finalData.due_date))
            : "No date specified"}

         
        </Grid>
        <Grid xs={12} className="homework_desc_cont">
          {finalData &&
          finalData.class_subject &&
          finalData.description &&
          finalData.class_subject.grade &&
          finalData.description !== false
            ? finalData.description
            : null}
        </Grid>
        <Grid xs={12} className="homework_media">
          {/*Image */}

          {finalData &&
          finalData.image &&
          Object.keys(finalData.image).length > 0
            ? finalData.image.map((item) => {
                console.log("got image playlist", item);
                var mediaObj = {};
                mediaObj.title = finalData.title;
                mediaObj.location = item.Location;
                mediaObj.type = "image";

                return (
                  <div className="media_file_cont">
                    <div
                      className="media_file_thumb"
                      onClick={() => {
                        handleMediaModalOpen(mediaObj);
                      }}
                    >
                      <img
                        className="homework-media-icon"
                        src={item.Location}
                      />
                    </div>
                  </div>
                );
              })
            : null}
          {/*Audio */}

          {finalData &&
          finalData.audio &&
          Object.keys(finalData.audio).length > 0
            ? finalData.audio.map((item) => {
                console.log("got audio playlist", item);
                var mediaObj = {};
                mediaObj.title = finalData.title;
                mediaObj.location = item.Location;
                mediaObj.type = "audio";

                //Print a thumbnail here

                return (
                  <div className="media_file_cont">
                    <div
                      className="media_file_thumb"
                      onClick={() => {
                        handleMediaModalOpen(mediaObj);
                      }}
                    >
                      <img className="homework-media-icon" src={media.audio} />
                    </div>
                  </div>
                );
              })
            : null}

          {/*Video */}

          {finalData &&
          finalData.video &&
          Object.keys(finalData.video).length > 0
            ? finalData.video.map((item) => {
                console.log("got video playlist", item);
                var mediaObj = {};
                mediaObj.title = finalData.title;
                mediaObj.location = item.Location;
                mediaObj.type = "video";

                return (
                  <div className="media_file_cont">
                    <div
                      className="media_file_thumb"
                      onClick={() => {
                        handleMediaModalOpen(mediaObj);
                      }}
                    >
                      <img className="homework-media-icon" src={media.audio} />
                    </div>
                  </div>
                );
              })
            : null}
        </Grid>
        <MediaModal />
      </Grid>
    );
  };

  export default HwInfo;