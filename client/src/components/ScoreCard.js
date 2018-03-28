import React, { Fragment } from 'react';
import ScoreSection from './ScoreSection';

const ScoreCard = () => (
  <Fragment>
  <ScoreSection label="Upper" />
  <ScoreSection label="Lower" />
  </Fragment>
)

export default ScoreCard