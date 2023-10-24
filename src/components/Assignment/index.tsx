import styles from "./assignment.module.css";
import type { ChangeEventHandler } from "react";
import { TbTrash, TbCircleCheckFilled, TbCircleFilled } from "react-icons/tb";
import { getDueDayNum } from "../../utils";

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
      isSelected: !selectedList[index].isSelected,
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
  const dueDist = getDueDayNum(record.dueDate);
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
      </p>
      <p
        style={{
          padding: 5,
          border: '1px solid black',
          borderRadius: 15,
          backgroundColor: dueDist < 2 ? "red" : "#8284fa",
        }}
      >
        Due: {getDueText(dueDist)}
      </p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

const getDueText = (dueDist: number) => {
  if (dueDist > 1) {
    return dueDist + " days";
  } else if (dueDist === 1) {
    return "tomorrow";
  } else if (dueDist === 0) {
    return "today";
  } else {
    return "past " + (0 - dueDist) + " days";
  }
};
