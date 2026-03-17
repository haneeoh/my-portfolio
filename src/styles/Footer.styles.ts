import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 120px 40px; /* 위아래 여백을 조금 더 줘서 여유롭게! */
  background-color: #111;
  color: #fff;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
`;

export const ContactSubText = styled.p`
  color: #888;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

export const InfoLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    color: #0066ff;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.div`
  margin-top: 80px;
  font-size: 0.8rem;
  color: #444;
  letter-spacing: 0.05em;
`;