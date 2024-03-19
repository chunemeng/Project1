import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const Progress = ({ current, steps }) => {
    return (
        <Steps current={current} progressDot>
            {steps.map((step, index) => (
                <Step key={index} title={step.title} description={step.description} />
            ))}
        </Steps>
    );
};

export default Progress;