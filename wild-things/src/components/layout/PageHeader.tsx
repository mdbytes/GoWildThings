import { PageHeaderProps } from '../../types';

export const PageHeader = (props: PageHeaderProps) => {
  const renderIcon = (icon: string): JSX.Element => {
    return <i className={icon}></i>;
  };
  return (
    <div className="page-header row">
      <h1 className="page-header-title">{props.page}</h1>

      <div className="icon">{props.icon ? renderIcon(props.icon) : null}</div>
    </div>
  );
};
