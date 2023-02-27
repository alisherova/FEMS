import styled from "@emotion/styled"; 
import {fontSizes, fontWeights,borders, textColors, bgColors} from "styles/theme";

export const Wrapper = styled.div`
border-radius: ${borders.b12};
margin: 24px; 

.employeesTitle{
    font-size: ${fontSizes.f12}; 
    font-weight: ${fontWeights.w600};
}
`;

export const DetailsContainer = styled.div`
background-color: white;
display: flex; 
padding: 0 24px;
border-radius: ${borders.b12}; 
border: 1px solid #E2E8F0;
margin-top: 16px;

p{
    font-family: 'Inter';
    display: inline-block;
    font-size: ${fontSizes.f14}; 
}

span{
    font-family: 'Inter';
    display: block;
    color: ${textColors.gray40};
    text-transform: uppercase; 
    font-size: ${fontSizes.f12}; 
}

.borderSpan{
    display: inline-block;
    background-color: ${bgColors.slate50};
    width: 1px;
    height: 100 !important%;
}
`;

export const UserInfo = styled.div`
    display: flex;
    width: 20%; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 46px;
    padding-bottom: 46px;
    padding-right: 24px;

    .userName{
        font-size: ${fontSizes.f20}; 
        font-weight: ${fontWeights.w700};
        margin-top: 24px;
    }

    .userStatus{
        font-size: ${fontSizes.f14};  
        margin-top: 8px;
        margin-bottom: 16px;
    }

    .userInfoBtn{
        width: 100%;
        height: 40px;
        border-radius: ${borders.b12}; 
        background-color: ${bgColors.slate50};
        color: ${textColors.white};
    }
`;

export const UserDetails = styled.div` 
width: 80%;
display: flex; 
flex-wrap: wrap;
padding-left: 40px; 
padding-top: 46px;

p{
    width: 33%;
    margin-bottom: 40px;
}
`

export const PermissionsWrapper = styled.div`
    border-radius: 12px;
    border: 1px solid ${bgColors.slate50};
    margin: 24px 0; 
`

export const PermissionsContent = styled.div`
    button{
        font-size: ${fontSizes.f14};
        font-weight: ${fontWeights.w500};
        border: 1px solid ${bgColors.slate50};
        padding: 10px 20px;
        margin-right: 25px;
        border-radius: 12px;
    }
`
