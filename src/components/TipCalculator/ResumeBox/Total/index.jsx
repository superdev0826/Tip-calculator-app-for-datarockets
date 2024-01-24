import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.neutral.white};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin: 0;
`;

const Subtitle = styled.small`
  color: ${({ theme }) => theme.color.neutral.dark};
  font-size: 13px;
  display: block;
`;

const Sum = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin: 0;

  @media(min-width: 1024px){
    font-size: 48px;
    letter-spacing: -2%;
  }
`;

const Total = ({ subtitle, total, title }) => (
  <Container>
    <Title>
      {title}
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Title>
    <Sum>
      $
      {total.toFixed(2)}
    </Sum>
  </Container>
);

Total.propTypes = {
  subtitle: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Total;
