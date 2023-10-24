import moment from "moment";

// get homework date
export const getHwDate = (modifier: number): Date => {
  const today = moment.now();
  const todayMoment = moment(today);
  return todayMoment.add(modifier).toDate();
};

export const getDueDayNum = (dueDate: Date): number => {
  const todayDate = new Date();
  // console.log("dev: getDueDayNum: ", { todayDate, dueDate });
  return moment(dueDate).diff(todayDate, 'days');
};
