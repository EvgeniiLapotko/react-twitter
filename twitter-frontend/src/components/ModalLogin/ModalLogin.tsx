import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./modal.scss";

interface ModalLoginType {
    closeModalLogin: () => void;
}

function ModalLogin({ closeModalLogin }: ModalLoginType) {
    const [useEmail, setUseEmail] = useState(false);

    const [stateInput, setStateInput] = React.useState<{
        monthValue: string | number;
        name: string;
    }>({
        monthValue: "",
        name: "",
    });
    const [stateInputDay, setStateInputDay] = React.useState<{
        dayValue: string | number;
        name: string;
    }>({
        dayValue: "",
        name: "",
    });
    const [stateInputYear, setStateInputYear] = React.useState<{
        yearValue: string | number;
        name: string;
    }>({
        yearValue: "",
        name: "",
    });

    const handleChangeMonth = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const name = event.target.name as keyof typeof stateInput;
        setStateInput({
            ...stateInput,
            [name]: event.target.value,
        });
    };

    const handleChangeDay = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const name = event.target.name as keyof typeof stateInput;
        setStateInputDay({
            ...stateInputDay,
            [name]: event.target.value,
        });
    };
    const handleChangeYear = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const name = event.target.name as keyof typeof stateInput;
        setStateInputYear({
            ...stateInputYear,
            [name]: event.target.value,
        });
    };

    const handleUseEmail: () => void = () => {
        setUseEmail(!useEmail);
    };

    return (
        <div className="modal">
            <div className="modal__cnotainer">
                <div className="modal__cnotainer-closeIcon">
                    <HighlightOffIcon onClick={closeModalLogin} />
                </div>

                <div className="modal__cnotainer-icon">
                    <TwitterIcon />
                </div>
                <h1 className="modal__cnotainer-title">
                    Создайте учетную запись
                </h1>
                <div className="modal__cnotainer-input">
                    <TextField label="Имя" variant="outlined" fullWidth />
                </div>
                {useEmail ? (
                    <div className="modal__cnotainer-input">
                        <TextField
                            label="Адрес электронной почты"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                ) : (
                    <div className="modal__cnotainer-input">
                        <TextField
                            label="Телефон"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                )}
                <div
                    className="modal__cnotainer-useEmail"
                    onClick={handleUseEmail}
                >
                    {useEmail
                        ? "Использовать телефон"
                        : "Использовать электронную почту"}
                </div>
                <p className="modal__cnotainer-text">
                    <span>Дата рождения</span> Эта информация не будет
                    общедоступной. Подтвердите свой возраст, даже если эта
                    учетная запись предназначена для компании, домашнего
                    животного и т. д.
                </p>
                <div className="modal__container-selectBlock">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">
                            Месяц
                        </InputLabel>
                        <Select
                            native
                            value={stateInput.monthValue}
                            onChange={handleChangeMonth}
                            label="Age"
                            inputProps={{
                                name: "monthValue",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={0}>Январь</option>
                            <option value={1}>Февраль</option>
                            <option value={2}>Март</option>
                            <option value={3}>Апрель</option>
                            <option value={4}>Май</option>
                            <option value={5}>Июнь</option>
                            <option value={6}>Июль</option>
                            <option value={7}>Август</option>
                            <option value={8}>Сентябрь</option>
                            <option value={9}>Октябрь</option>
                            <option value={10}>Ноябрь</option>
                            <option value={11}>Декабрь</option>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">
                            День
                        </InputLabel>
                        <Select
                            native
                            value={stateInputDay.dayValue}
                            onChange={handleChangeDay}
                            label="Age"
                            inputProps={{
                                name: "dayValue",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={0}>1</option>
                            <option value={1}>2</option>
                            <option value={2}>3</option>
                            <option value={3}>4</option>
                            <option value={4}>5</option>
                            <option value={5}>6</option>
                            <option value={6}>7</option>
                            <option value={7}>8</option>
                            <option value={8}>9</option>
                            <option value={9}>10</option>
                            <option value={10}>11</option>
                            <option value={11}>12</option>
                            <option value={12}>13</option>
                            <option value={13}>14</option>
                            <option value={14}>15</option>
                            <option value={15}>16</option>
                            <option value={16}>17</option>
                            <option value={17}>18</option>
                            <option value={18}>19</option>
                            <option value={19}>20</option>
                            <option value={20}>21</option>
                            <option value={21}>22</option>
                            <option value={22}>23</option>
                            <option value={23}>24</option>
                            <option value={24}>25</option>
                            <option value={25}>26</option>
                            <option value={26}>27</option>
                            <option value={27}>28</option>
                            <option value={28}>29</option>
                            <option value={29}>30</option>
                            <option value={30}>31</option>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">
                            Год
                        </InputLabel>
                        <Select
                            native
                            value={stateInputYear.yearValue}
                            onChange={handleChangeYear}
                            label="Age"
                            inputProps={{
                                name: "yearValue",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={0}>1980</option>
                            <option value={1}>1981</option>
                            <option value={2}>1982</option>
                            <option value={3}>1983</option>
                            <option value={4}>1984</option>
                            <option value={5}>1985</option>
                            <option value={6}>1986</option>
                            <option value={7}>1987</option>
                            <option value={8}>1988</option>
                            <option value={9}>1989</option>
                            <option value={10}>1990</option>
                            <option value={11}>1991</option>
                            <option value={12}>1992</option>
                            <option value={13}>1993</option>
                            <option value={14}>1994</option>
                            <option value={15}>1995</option>
                            <option value={16}>1996</option>
                            <option value={17}>1997</option>
                            <option value={18}>1998</option>
                            <option value={19}>1999</option>
                            <option value={20}>2000</option>
                            <option value={21}>2001</option>
                            <option value={22}>2002</option>
                            <option value={23}>2003</option>
                            <option value={24}>2004</option>
                            <option value={25}>2005</option>
                            <option value={26}>2006</option>
                            <option value={27}>2007</option>
                            <option value={28}>2008</option>
                            <option value={29}>2009</option>
                            <option value={30}>2010</option>
                        </Select>
                    </FormControl>
                </div>
                <div className="modal__container-btn">
                    <Button variant="contained" color="primary" fullWidth>
                        Далее
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
