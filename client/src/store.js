// store.js
import { createStore, combineReducers } from 'redux';

import rootReducer from '../src/components/Reducers/reducers';
import EquipmentCleaningReducers from './components/Reducers/EquipmentCleaningReducers';
import signatureReducer from './components/Reducers/saveSignatureReducer';
import areaAndEquipmentReducers from './components/Reducers/areaAndEquipmentReducers';
import DifferentialPressureReducers from './components/Reducers/DifferentialPressureReducer';
import DPRpanelReducers from './components/Reducers/DPRpanelReducers';
import TemperatureRecordReducers from './components/Reducers/TemperatureRecordReducers';
import EBMRFormReducer from './components/Reducers/EBMRFormReducer';

const reducer=combineReducers({
    objects:rootReducer,
    equipment:EquipmentCleaningReducers,
    signature:signatureReducer,
    area:areaAndEquipmentReducers,
    tableData:DifferentialPressureReducers,
    dprPanelData:DPRpanelReducers,
    temperature:TemperatureRecordReducers,
    ebmrData:EBMRFormReducer,
})
const store = createStore(reducer);

export default store;