import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderPage = () => {
  return (
    <FullPageWrapper>
      <div className="loader-content">
        <Spinner>
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </Spinner>
        <LoadingText>
          Loading<span>.</span><span>.</span><span>.</span>
        </LoadingText>
      </div>
    </FullPageWrapper>
  );
};

// --- Animations ---

const bounce = keyframes`
  0%, 100% { transform: scale(0); }
  50% { transform: scale(1.0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const blink = keyframes`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`;

// --- Styled Components ---

const FullPageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #1a1a2e 0%, #0f0f1b 100%);
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  margin: 0 auto 20px;

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00d2ff; /* لون أساسي عصري */
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${bounce} 2s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
    background-color: #3a7bd5; /* تدرج لوني */
  }
`;

const LoadingText = styled.h2`
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  text-align: center;
  direction: rtl;

  span {
    animation: ${blink} 1.4s infinite both;
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

export default LoaderPage;