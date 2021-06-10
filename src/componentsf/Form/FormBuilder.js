import React from 'react';
import t from 'prop-types';
import {path} from 'ramda';
import {useFormContext, useFormState} from 'react-hook-form';
import {Paragraph} from '../Typography';
import {ErrorMessage, LabelControlledInput} from './Inputs';

export const getErrorMessage = (fieldname, errors) => {
  const error = path(fieldname.split('.'), errors);

  if (!error) {
    return null;
  }

  return <ErrorMessage>{error.message}</ErrorMessage>;
};

const renderInput = ({register, trigger, control}, {errors}) => (e, idx) => {
  const message = e.name && getErrorMessage(e.name, errors);

  if (e.type === 'text') {
    return (
      <LabelControlledInput
        {...e}
        key={idx}
        name={e.name}
        control={control}
        message={message}
      />
    );
  }

  if (e.type === 'password') {
    return (
      <LabelControlledInput
        {...e}
        key={idx}
        name={e.name}
        control={control}
        secureTextEntry={true}
        message={message}
      />
    );
  }

  return <Paragraph>Couldn&apos;t render input: ({e.name})</Paragraph>;
};

const FormBuilder = ({fields, form}) => {
  const formCtx = useFormContext();
  const {errors} = useFormState();

  const pickInput = React.useMemo(
    () => renderInput(form || formCtx, {errors}),
    [form, formCtx, errors],
  );

  return (
    <React.Fragment>
      {fields.map((fieldOrFields, idx) => {
        if (Array.isArray(fieldOrFields)) {
          return (
            <div className="field-split">{fieldOrFields.map(pickInput)}</div>
          );
        }

        return pickInput(fieldOrFields, idx);
      })}
    </React.Fragment>
  );
};

FormBuilder.defaultProps = {
  form: [],
  flat: false,
};

FormBuilder.propTypes = {
  form: t.array.isRequired,
  flat: t.bool,
};

export default FormBuilder;
