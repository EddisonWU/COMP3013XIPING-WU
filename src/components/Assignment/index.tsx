import styles from "./assignment.module.css";
import type { ChangeEventHandler } from "react";
import {
  TbTrash,
  TbCircleCheckFilled,
  TbCircleFilled,
} from "react-icons/tb";

export function Assignment(props: any) {
  const { record, index, selectedList, setSelectedList } = props;

  // FEATURE: select
  const onSelect: ChangeEventHandler<any> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (typeof selectedList[index] !== "object") {
      console.error("error", { index, selectedList });
      return;
    }
    const selectedRecord = {
      ...selectedList[index],
      isSelected: !(selectedList[index].isSelected),
    };
    selectedList[index] = selectedRecord;
    // alert(JSON.stringify(deletedRecord) + '  index: index');
    setSelectedList([...selectedList]);
  };
  // FEATURE: delete
  const onDelete: ChangeEventHandler<any> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (typeof selectedList[index] !== "object") {
      console.error("error", { index, selectedList });
      return;
    }
    const deletedRecord = { ...selectedList[index], isDeleted: true };
    selectedList[index] = deletedRecord;
    // alert(JSON.stringify(deletedRecord) + '  index: index');
    setSelectedList([...selectedList]);
  };
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onSelect}>
        {/* <div /> */}
        {record.isSelected ? (
          <TbCircleCheckFilled size={40} />
        ) : (
          <TbCircleFilled size={40} />
        )}
      </button>

      <p style={{ textDecoration: record?.isDeleted ? "line-through" : "" }}>
        {record.text}
        {/* {JSON.stringify(record)} */}
      </p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
