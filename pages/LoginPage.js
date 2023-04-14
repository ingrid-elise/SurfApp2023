import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { HomeScreen } from "./HomeScreen";

const LoginPage = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text>Welcome</Text>
            <Text>Please login to continue</Text>
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <Text>This is required.</Text>}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />

            <Button
              title="Submit"
              // onPress={handleSubmit(onSubmit)}
              onPress={() => navigation.navigate("Home Screen")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
