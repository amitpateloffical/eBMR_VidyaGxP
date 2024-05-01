const initialState = {
    EBMRFormData: [],
  };

const EBMRFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EBMR_FORM_DATA':
          return {
            ...state,
            EBMRFormData: [...state.EBMRFormData, action.payload],
          };
        case 'EDIT-EBMR_FORM_DATA':
          const { id, editedData } = action.payload;
          const updatedData = state.EBMRFormData.map(item => {
            if (item.eLogId === id) { 
              return {
                ...item,
                ...editedData,
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
}

export default EBMRFormReducer
