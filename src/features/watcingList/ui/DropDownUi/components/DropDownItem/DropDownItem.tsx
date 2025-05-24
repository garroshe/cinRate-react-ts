import {StyledImg, StyledLabel, StyledRating} from "./styled.tsx";

interface IDropDownItemProps {
    img: string;
    label: string;
    rating: number;
}

export const DropDownItem = ({img, label, rating}: IDropDownItemProps) => {
    return (
        <div>
            <StyledImg src={img} alt={label} />
            <StyledLabel>{label}</StyledLabel>
            <StyledRating>{rating}</StyledRating>
        </div>
    )
}