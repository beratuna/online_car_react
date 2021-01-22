/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export default function withLoading(WrappedComponent) {
  class WithLoading extends React.PureComponent {
    render() {
      const { loading, ...restProps } = this.props;
      if (loading) {
        return (
          <ClipLoader
            css={undefined}
            size={150}
            color="#000"
            loading={loading}
          />
        );
      }
      return <WrappedComponent {...restProps} />;
    }
  }
  WithLoading.propTypes = {
    loading: PropTypes.bool.isRequired,
  };
  return WithLoading;
}
