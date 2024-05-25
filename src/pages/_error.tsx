import { AxiosError } from 'axios';
import { NextPageContext } from 'next';

const ErrorPage = () => {
    return <div>Error</div>;
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode =
        (err as AxiosError)?.response?.status ??
        res?.statusCode ??
        err?.statusCode ??
        undefined;
    if (res && statusCode) {
        res.statusCode = statusCode;
    }
    const text = String(res?.statusMessage || err?.message || err);
    return { statusCode, text };
};

export default ErrorPage;
