import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Input, InputAdornment } from "@material-ui/core";

import "./searchForm.scss";

function SerachFormInput() {
    return (
        <div>
            <Input
                className="search__form-input"
                id="input-with-icon-adornment"
                placeholder={"Поиск в Твиттере"}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchRoundedIcon className="search__form-input-icon" />
                    </InputAdornment>
                }
                fullWidth
            />
        </div>
    );
}

export default SerachFormInput;
