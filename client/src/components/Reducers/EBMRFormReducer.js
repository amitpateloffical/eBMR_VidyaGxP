const initialState = {
  EBMRFormData: [],
};

const EBMRFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EBMR_FORM_DATA":
      return {
        ...state,
        EBMRFormData: [...state.EBMRFormData, action.payload],
      };
    case "EDIT-EBMR_FORM_DATA":
      const updatedData = state.EBMRFormData.map((item) => {
        if (item.eBMRId === action.payload.eBMRId) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
      return {
        ...state,
        EBMRFormData: updatedData,
      };
    default:
      return state;
  }
};

export default EBMRFormReducer;
