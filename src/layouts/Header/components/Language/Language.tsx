import {StyledSelectLen} from "./styled";
import { useTranslation } from 'react-i18next';
import type {ChangeEvent} from "react";

export const Language = () => {
    const { i18n } = useTranslation();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <StyledSelectLen onChange={handleChange} value={i18n.language}>
            <option value="en">English</option>
            <option value="uk">Українська</option>
        </StyledSelectLen>
    )
}