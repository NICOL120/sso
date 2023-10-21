import { useAllDaosQuery } from 'dao/hooks/useAllDaosQuery';
import { LabeledPageSection } from 'lib/ui/LabeledPageSection';
import { SameWidthChildrenRow } from 'lib/ui/Layout/SameWidthChildrenRow';
import { DAOCard } from 'pages/shared/DAOCard';
import styles from './Topdao.module.css';

export const RecentDAOs = () => {
  const { data = [] } = useAllDaosQuery();

  const daos = data.sort((a, b) => (b.tvl ?? 0) - (a.tvl ?? 0)).slice(0, 6);

  return (
    <div className={classNames(styles.root)}>
    <LabeledPageSection name="">
        {daos.map((dao, index) => (
          <DAOCard key={index} dao={dao} />
        ))}
    </LabeledPageSection>
    </div>
  );
};
