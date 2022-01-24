export const getApiData = () => (dispatch) => {
  dispatch({ type: "REQUEST_DATA_PENDING" });
  fetch("./mock_data/list.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: "REQUEST_DATA_SUCCESS", payload: data }))
    .catch((error) =>
      dispatch({ type: "REQUEST_DATA_FAILED", payload: error })
    );
};
