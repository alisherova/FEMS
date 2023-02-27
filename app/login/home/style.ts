import styled from "@emotion/styled";

export const FormWrapper = styled.form<{ bgColor?: string; }>`
  width: 720px;
  padding: 80px 20px;
  border-radius: 16px;
  background: ${(props) => props.bgColor};
  
  .image {
    margin: 0 auto 40px auto;
  }
  
  .box {
    width: 50%;
    margin: 0 auto;
    
    .input {
      margin-bottom: 20px;
    }
  }
`;

export const MainBgWrapper = styled.div`
  background-image: url('/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;