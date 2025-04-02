import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'

export function App() {
  const [todos, setTodos] = useState<string[]>(['0', '1'])
  const [itemCount, setItemCount] = useState<number>(2)


  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const addTodo = useCallback(() => {
    setItemCount(itemCount + 1)
    setTodos([...todos, itemCount.toString()])
  }, [todos])

  const deleteTodoCurrentItem = useCallback((index: number) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }, [todos])

  return (
    <view style={{
      backgroundColor: "white",
      padding: "20px",
      width: "100%",
      height: "100vh",
      border: "2px solid black",
      borderRadius: "10px"
    }}>
      <view style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        <view
          style={{
            backgroundColor: "#f0f5ff",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "15px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
          bindtap={addTodo}
        >
          <text style={{ textAlign: "center", fontSize: "18px", color: "black" }}>Add</text>
        </view>
      </view>

      <view style={{
        backgroundColor: "#f0f5ff",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <text style={{ textAlign: "center", fontSize: "18px", color: "black" }}>todo-list</text>
      </view>
      <list
        scroll-orientation="vertical"
        list-type="single"
        span-count={1}
        style={{
          width: "100%",
          height: "100vh",
          listMainAxisGap: "0px",
        }}
      >
        {todos.map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
              style={{
                marginBottom: "10px",
              }}
            >
              <view style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}>
                <view style={{ 
                  width: "50%", 
                  backgroundColor: "#f0f5ff",
                  border: "2px solid black",
                  borderRadius: "10px",
                  padding: "15px",
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <text style={{ textAlign: "center", fontSize: "18px", color: "black" }}>item {item}</text>
                </view>
                <view style={{ 
                  width: "50%", 
                  backgroundColor: "#f0f5ff",
                  border: "2px solid black",
                  borderRadius: "10px",
                  padding: "15px",
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <text
                    style={{ textAlign: "center", fontSize: "18px", color: "black" }}
                    bindtap={() => deleteTodoCurrentItem(index)}
                  >deleteItem</text>
                </view>
              </view>
            </list-item>
          );
        })}
      </list>
    </view>
  )
}
