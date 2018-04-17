import css from './index.css';
import Link from 'next/link';

export default () => (
    <React.Fragment>
        <Link className={css.link} href="/2018-04-08" prefetch>
            <a>
                <div className={css.container}>
                    <img className={css.image} src="/static/2018-04-17.png" />
                </div>
            </a>
        </Link>
        <p className={css.explainer}>
            this is my diary - you can click through to older entries. If that
            stops working, there aren't any more entries
        </p>
    </React.Fragment>
);
