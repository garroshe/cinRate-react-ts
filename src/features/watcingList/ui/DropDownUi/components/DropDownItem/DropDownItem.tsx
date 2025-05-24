import { StyledDeleteIcon, StyledImg, StyledLabel, StyledRating } from "./styled.tsx";
import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteMovieMutation } from "./hooks/use-delete-movie-mutation.ts";

interface IDropDownItemProps {
    img: string;
    label: string;
    rating: number;
    id: number;
}

export const DropDownItem = ({img, label, rating, id}: IDropDownItemProps) => {
  const { mutate } = useDeleteMovieMutation();
    return (
        <div style={{position: 'relative'}}>
            <StyledDeleteIcon onClick={()=> mutate(id)}>
              <DeleteOutlined />
            </StyledDeleteIcon>
            <StyledImg src={img} alt={label} />
            <StyledLabel>{label}</StyledLabel>
            <StyledRating>{rating}</StyledRating>
        </div>
    )
}