import styled from 'styled-components';

export const CardContainer = styled.article`
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer; /* 카드 전체에 클릭 가능하다는 표시 */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 220px;
  background-color: #f1f3f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adb5bd;
  font-size: 0.9rem;
`;

export const ContentWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #212529;
`;

export const Role = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #00D1B2;
  margin-bottom: 12px;
  display: block;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #495057;
  line-height: 1.6;
  margin: 0 0 16px 0;
  white-space: pre-line;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Tag = styled.span`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  color: #495057;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
`;