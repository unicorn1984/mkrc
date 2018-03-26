import React from 'react';
import classNames from 'classnames';
import CopyableIcon from './CopyableIcon';

export default class IconSet extends React.Component {
  static defaultProps = {
    icons: [],
  }

  icons = {
    suggestion: ['check-circle', 'info-circle', 'cross-circle', 'exclamation-circle', 'question-circle-o', 'question-circle'],
    normal: ['spin', 'loading', 'loading-3-quarters', 'angle-up', 'angle-down', 'angle-left', 'angle-right', 'rubbish', 'folder', 'folder-open', 'file-empty', 'search', 'plus-thin', 'plus', 'times-thin'],
    brand: [],
    biz: [],
  };

  // Show badges
  newIcons = [
    'aliyun',
  ];

  render() {
    const { className, catigory } = this.props;
    const listClassName = classNames({
      'anticons-list': true,
      clearfix: true,
      [className]: !!className,
    });
    return (
      <ul className={listClassName}>
        {this.icons[catigory].map(type => (
          <CopyableIcon key={type} type={type} isNew={this.newIcons.indexOf(type) >= 0} />
        ))}
      </ul>
    );
  }
}
