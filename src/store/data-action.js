import { dataActions } from "./data-slice";
import { uiActions } from "./ui-slice";

const search = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data...");
  }
  const data = await response.json();
  return data;
};

export const fetchMails = (searchTerm, isSearch) => {
  return async (dispatch) => {
    try {
      const data = await search();

      if (isSearch) {
        const filteredData = data.filter((item) =>
          item.subject.includes(searchTerm)
        );

        await dispatch(dataActions.fetchMailData(filteredData));
        await dispatch(uiActions.loading(false));
        return;
      }

      if (searchTerm === "all") {
        await dispatch(dataActions.fetchMailData(data));
        await dispatch(uiActions.loading(false));
        return;
      }

      const filteredData = data.filter((item) => item.tag === searchTerm);
      await dispatch(dataActions.fetchMailData(filteredData));
      await dispatch(uiActions.loading(false));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchMailDetail = (id) => {
  return async (dispatch) => {
    try {
      const data = await search();

      const mailIndex = data.findIndex((item) => item.id === id);

      const mailDetail = data[mailIndex];
      dispatch(dataActions.fetchMailDetailData(mailDetail));
      dispatch(uiActions.loading(false));
    } catch (error) {
      console.log(error.message);
    }
  };
};
