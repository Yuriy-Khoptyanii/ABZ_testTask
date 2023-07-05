import './SignUpForm.scss';

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { fetchSignUp, getPositions } from '../../api';
import { Positions, SignUpValues } from '../../types/allTypes';
import { validationSchema } from './Validation';

type Props = {
  setIsUpdated: Dispatch<SetStateAction<boolean>>;
};

export const SignUpForm: React.FC<Props> = ({ setIsUpdated }) => {
  const [positions, setPositions] = useState<Positions[]>([]);

  useEffect(() => {
    getPositions('/positions').then((positions) => setPositions(positions));
  }, []);

  const submitSignUp = async (
    values: SignUpValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('position_id', String(values.position));
    if (values.photo) {
      formData.append('photo', values.photo);
    }
    await fetchSignUp('/users', formData as never as SignUpValues);
    resetForm();
    setIsUpdated(true);
  };

  return (
    <div className="signUpForm" id="form">
      <h1 className="signUpForm__title">Working with POST request</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          position: 1,
          photo: undefined,
        }}
        validationSchema={validationSchema}
        onSubmit={submitSignUp}
      >
        {({ errors, touched, values, setFieldValue, setFieldTouched, isValid }) => (
          <Form className="form">
            <div className="form__element">
              <Field
                as={TextField}
                error={!!errors.name && !!touched.name}
                className="form__element__field"
                label="Your name"
                type="text"
                id="name"
                name="name"
                helperText={errors.name && touched.name ? errors.name : ''}
              />
            </div>
            <div className="form__element">
              <Field
                as={TextField}
                error={!!errors.email && !!touched.email}
                className="form__element__field"
                label="Email"
                type="email"
                id="email"
                name="email"
                helperText={errors.email && touched.email ? errors.email : ''}
              />
            </div>
            <div className="form__element">
              <Field
                as={TextField}
                error={!!errors.phone && !!touched.phone}
                className="form__element__field"
                label="Phone"
                type="tel"
                id="phone"
                name="phone"
                helperText={
                  errors.phone && touched.phone ? errors.phone : '+38 (XXX) XXX - XX - XX'
                }
              />
            </div>
            <div className="form__element">
              <FormControl>
                <label htmlFor="position" className="positionsTitle">
                  Select your position
                </label>
                <RadioGroup
                  value={values.position}
                  onChange={(e) => setFieldValue('position', e.target.value)}
                >
                  {positions.map((position) => (
                    <FormControlLabel
                      key={position.id}
                      // checked={position.id === values.position}
                      value={position.id}
                      control={<Radio />}
                      label={position.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className="form__element">
              <label htmlFor="photo" className="uploadField">
                <input
                  name="photo"
                  className="uploadField__input"
                  type="file"
                  accept="image/jpg, image/jpeg"
                  id="photo"
                  onChange={(e) => {
                    setFieldTouched('photo', true);
                    setFieldValue('photo', e.target.files?.[0]);
                  }}
                />
                <span
                  className={classNames('uploadField__btn', {
                    uploadField__btn__error: errors.photo && touched.photo,
                  })}
                >
                  Upload
                </span>
                <input
                  className={classNames('uploadField__label', {
                    uploadField__label__error: errors.photo && touched.photo,
                  })}
                  placeholder="Upload your photo"
                  readOnly
                  value={(values.photo as unknown as File)?.name || ''}
                />
                <div className="uploadField__error">
                  <ErrorMessage name="photo" />
                </div>
              </label>
            </div>
            <button
              className="btn"
              type="submit"
              disabled={!isValid || Object.keys(touched).length === 0}
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
