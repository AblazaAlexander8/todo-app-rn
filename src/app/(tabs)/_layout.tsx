import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Ionicons name="cog-outline" />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
