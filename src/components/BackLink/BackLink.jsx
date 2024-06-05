import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

import css from './BackLink.module.css';

export const BackLink = ({ href}) => {
  return <Link to={href} className={css.backLink}>< FaArrowLeftLong className={css.fcLeft}/>Go back</Link>;
};

