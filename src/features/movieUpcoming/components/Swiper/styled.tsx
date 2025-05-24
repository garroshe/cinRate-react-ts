import styled from 'styled-components';

export const SlideWrapper = styled.div`
    padding: 0 10px;
    position: relative;

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
    }

    h3 {
        text-align: center;
        color: white;
        cursor: pointer;
        margin-top: 5px;
        height: 40px;
        overflow: hidden;
        font-weight: 700;
        font-size: 15px;
        &:hover {
            color: #a14de2;
        }
    }
`;

export const StyledAdd = styled.div`
    position: absolute;
    top: 10px;
    left: 20px;
    cursor: pointer;
    color: #3c3c3c;
    &:hover {
        color: #a14de2;
    }
`
