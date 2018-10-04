import React from "react";
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";

const PopupCom = ({ Title, Year, Poster }) => (
    <Popup trigger={<Button variant="contained" color="primary" className="button" 
    position = "bottom left">
        EDIT
 </Button>} modal>
        {close => (
            <div className="modal">
                <a className="close" onClick={close}>
                 &times;
        </a>
                <div className="headerPopup"> EDIT </div>
                <div className="content">
                <form className="form" >
                TITLE:<input
                type="text"
                placeholder={Title}
                autoFocus
               
                value={Title}
               />
             YEAR: <input
                type="text"
                placeholder={Year}
              
                value={Year}
               />
               <input
               type="text"
               placeholder={Title}
               autoFocus
             
               value={Title}
              />
             <input
               type="text"
               placeholder={Year}
             
               value={Year}
              />
              </form>
                </div>
                <div className="actions">
                    <Popup
                        trigger={<Button variant="contained" color="primary" className="button" > SAVE</Button>}
                        position="top center"
                        closeOnDocumentClick >
                        <span>

                        </span>
                    </Popup>
                    <Button variant="contained" color="primary" className="button"
                        onClick={() => {
                            console.log('close ')
                            close()
                        }} >
                        Cancel
          </Button>
                </div>
            </div>
        )}
    </Popup>
);


export default PopupCom;