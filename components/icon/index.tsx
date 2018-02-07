import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export interface IconProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>;
  spin?: boolean;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { type, className = '', spin } = props;
  const classString = classNames({
    mkicon: true, // custom
    'mkicon-spin': !!spin || type === 'loading',  // custom
    [`mkicon-${type}`]: true,  // custom
  }, className);
  return <i {...omit(props, ['type', 'spin'])} className={classString} />;
};

export default Icon;
