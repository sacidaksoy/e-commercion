import ErrorPage from '@/components/ErrorPage';
import { NextPageContext } from 'next';

interface Props {
  statusCode?: number;
}

const Error = ({ statusCode }: Props) => {
  return <ErrorPage statusCode={statusCode} />;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
