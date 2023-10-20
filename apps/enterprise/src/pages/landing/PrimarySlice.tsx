import classNames from 'classnames';
import { Text } from 'lib/ui/Text';
import { useDisplay } from 'hooks';
import { useNavigate } from 'react-router';
import styles from './PrimarySlice.module.sass';

export const PrimarySlice = () => {
  const navigate = useNavigate();
  const { isMobile } = useDisplay();

  return (
    <div className={classNames(styles.root, { [styles.mobile]: isMobile })}>
      <Text size={40} weight="bold">
        Nico Money Dao
      </Text>
      <div className={styles.buttonContainer}> {/* Tambahkan container untuk tombol */}
        <Button
          onClick={() => {
            navigate('dashboard');
          }}
        >
          Launch App
        </Button>
      </div>
    </div>
  );
};
