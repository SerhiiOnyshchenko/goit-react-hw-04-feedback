import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
   return (
      <div className={s.container}>
         {options.map(name => {
            return (
               <div className={s.btn} key={name}>
                  <button
                     onClick={() => onLeaveFeedback(name)}
                     type="button"
                     name={name}
                  >
                     {name}
                  </button>
               </div>
            );
         })}
      </div>
   );
}

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
   onLeaveFeedback: PropTypes.func.isRequired,
};
