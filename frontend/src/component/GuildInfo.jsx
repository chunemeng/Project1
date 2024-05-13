import React from 'react';
import {useState} from "react"
import {Card, Divider, Typography,Layout,Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import PrivateLayout from "./layout_1";

const {Title,Paragraph} = Typography;
const {Header,Content} = Layout;
const GuildInfo = () => {
    const [inputValue,setInputValue] = useState(" ");
    const [showInput, setShowInput] = useState(true);
    const [description,setDescription] = useState("");
    const [showInput_1, setShowInput_1] = useState(true);
    const isManager = true;//
    const handleInputChange_0 = (event) =>{
        setInputValue(event.target.value);
    }
    const handleSave = () => {
        // 在这里，你可以将inputValue发送到服务器或其他地方进行保存
        console.log('保存的值:', inputValue);
        setShowInput(false); // 隐藏输入框
    };
    const handleInputChange_1 = (event) =>{
        setDescription(event.target.value);
    }
    const handleSave_1 = () => {
        // 在这里，你可以将description发送到服务器或其他地方进行保存
        console.log('保存的值:', description);
        setShowInput_1(false); // 隐藏输入框
    };

    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // 获取用户选择的第一个文件
        if (file) {
            // 创建一个FileReader实例
            const reader = new FileReader();

            // 当文件读取完成时，调用此函数
            reader.onloadend = () => {
                setImageUrl(reader.result); // 设置图片的URL（Base64编码）
            };

            // 读取文件为DataURL（Base64编码）
            reader.readAsDataURL(file);

            // 也可以在这里处理文件的原始数据（如发送到服务器）
            // 例如：使用fetch或axios将文件发送到服务器

            // 设置文件状态（如果需要后续处理）
            setImageFile(file);
        }
    };
    const Name = showInput ? (
        <div >
            <Title >公会名字：{inputValue}</Title>
            {isManager && (<div style={{height:"30px"}}>
                <input type="text" value={inputValue} onChange={handleInputChange_0} />
                <button onClick={handleSave}>保存</button>
            </div>)}
        </div>
    ) : (
        <div>
            <Title >公会名字：{inputValue}</Title>
            < div style={{height:"30px"}}/>
        </div>
    );
    const Description = showInput_1 ? (
        <div>
            <Paragraph>公会简介：{description}</Paragraph>
            {isManager && (< div style={{height:"30px"}}>
                <input type="text" value={description} onChange={handleInputChange_1} />
                <button onClick={handleSave_1}>保存</button>
            </div>)}
        </div>
    ) : (
        <div>
            <Paragraph>公会简介：{description}</Paragraph>
            < div style={{height:"30px"}}/>
        </div>
    );
    return (
    <Layout style={{height:"100%"}}>
        <Header style={{backgroundColor:"white",fontSize:"30px",fontStyle:"italic"} }>公会详情</Header>
        <Content title={"公会详情"} style={{height: "100%"}}>
            <div style={{float: "left", height: "650px", width: "40%", marginRight: "15px", textAlign: "center"}}>
                <Title>公会图片</Title>
                {<Avatar icon={<UserOutlined/>} src={imageUrl} alt="image" style={{
                    width: '100%',
                    height: '80%',
                    objectFit: 'cover',
                    backgroundColor: "green"
                }}/>}
                <input type="file" accept="image/*" onChange={handleImageUpload}/>
            </div>
            <div style={{float: "right", height: "710px", width: "50%"}}>
                {Name}
                <Divider dashed tyle={{height:"20px"}}></Divider>
                {Description}
            </div>
        </Content>
    </Layout>
    );
};

const GuildInfoPage = () => {
    return (
        <PrivateLayout>
            {GuildInfo}
        </PrivateLayout>
    );
}
export default GuildInfo;