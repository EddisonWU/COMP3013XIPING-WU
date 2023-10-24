import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments(props: any) {
  const { selectedList, setSelectedList } = props;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
        {(selectedList ?? []).map(
          (
            record: {
              text: string;
              isDeleted: boolean;
              isCompleted: boolean;
              isSelected: boolean;
              dueDate: Date;
            },
            index: number
          ) => {
            return (
              <Assignment
                key={index}
                record={record}
                index={index}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
