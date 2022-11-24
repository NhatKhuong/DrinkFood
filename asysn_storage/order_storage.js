import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveObjectOrder = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const valueOrder = await AsyncStorage.getItem(value.id);
    if (valueOrder !== null) {
      await AsyncStorage.setItem(
        value.id,
        JSON.stringify({
          ...JSON.parse(valueOrder),
          total: JSON.parse(valueOrder).total + value.total,
        })
      );
    } else {
      await AsyncStorage.setItem(value.id, jsonValue);
    }
  } catch (e) {}
};

export const decreaseOrder = async (value) => {
  try {
    const valueOrder = await AsyncStorage.getItem(value);
    await AsyncStorage.setItem(
      value,
      JSON.stringify({
        ...JSON.parse(valueOrder),
        total: JSON.parse(valueOrder).total - 1,
      })
    );
  } catch (error) {}
};

export const increaseOrder = async (value) => {
  try {
    const valueOrder = await AsyncStorage.getItem(value);
    await AsyncStorage.setItem(
      value,
      JSON.stringify({
        ...JSON.parse(valueOrder),
        total: JSON.parse(valueOrder).total + 1,
      })
    );
  } catch (error) {}
};
export const getAllOrder = async () => {
  let list_order;
  let new_listOrder = [];
  try {
    let keys = await AsyncStorage.getAllKeys();
    list_order = await AsyncStorage.multiGet(keys);
    list_order.forEach((list) => {
      new_listOrder.push(JSON.parse(list[1]));
    });
    // await AsyncStorage.multiRemove(value);
  } catch (e) {
    console.log(e);
  }
  return new_listOrder;
};

// export const saveListOrder = async (value) => {
//   try {
//     value.forEach((item) => {
//       removeData(item.id);
//     });
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(value.id, jsonValue);
//   } catch (e) {}
// };

export const removeData = async (value) => {
  try {
    await AsyncStorage.removeItem(value);
    return true;
  } catch (err) {
    return false;
  }
};
