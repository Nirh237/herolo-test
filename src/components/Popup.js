import React from "react";
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";

const inputChangedHandler = (key, value) => {
    console.log(key);
    console.log(value);
}

const PopupCom = ({ Title, Year, Poster }) => (




    //     trigger={<Button variant="contained" color="primary" className="button"
    //     position="bottom left" >
    //     EDIT
    // </Button>}

    <Popup open={true} modal>
        {close => (
            <div className="modal">

                <a className="close" onClick={close}>&times;</a>

                <div className="headerPopup"> EDIT </div>

                <div className="content">
                    <form className="form">
                        TITLE:<input
                            type="text"
                            autoFocus
                            value={Title}
                            onChange={(event) => inputChangedHandler("Title", Title)}
                        />
                        YEAR: <input
                            type="text"
                            value={Year}
                            onChange={(event) => inputChangedHandler("Year", Year)}
                        />
                        <input
                            type="text"
                            autoFocus
                            value={Title}
                            onChange={(event) => inputChangedHandler("Title", Title)}
                        />
                        <input
                            type="text"
                            placeholder={Year}
                            value={Year}
                            onChange={(event) => inputChangedHandler("Year", Year)}
                        />
                    </form>
                </div>
                <div className="actions">


                    <Button variant="contained" color="primary" className="button"
                        onClick={() => {
                            console.log('save ')

                        }} >
                        Save</Button>
                    <Button variant="contained" color="primary" className="button"
                        onClick={() => {
                            console.log('close ')
                            close()
                        }} >
                        Cancel</Button>
                </div>
            </div>
        )}
    </Popup>
);


export default PopupCom;