import 'index.css'
// import { sendToBackground } from '@plasmohq/messaging';
const 点击获取url = async () => {

  await chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs.length > 0) {
      const 地址 = tabs[0].url
      const id = 地址.split('?')[0].split('/').pop()
      if (id !== null) {
        复制文本内容(id)
      } else {
        return
      }
    }
  });

}

const 复制文本内容 = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('文本已复制到剪贴板');
    // 向后台传递消息
    // const resp = await sendToBackground({
    //   name: "ping",
    //   body: {
    //     id: 123
    //   }
    // })
    // console.log(resp)

    // 创建通知
    // chrome.notifications.create('0000', {
    //   type: 'basic',
    //   iconUrl: 'icon.png',
    //   title: '复制成功',
    //   message: '扩展id已复制到剪贴板'
    // }, 通知id => {
    //   console.log(通知id)
    // })
  } catch (err) {
   
    console.error('复制文本到剪贴板时出错:', err);
  }
}


const IndexPopup = () => {

  return (
    <div className="popup">
      <span onClick={点击获取url}>复制扩展id</span>
    </div>
  )
}

export default IndexPopup
