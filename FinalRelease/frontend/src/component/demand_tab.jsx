import {Button, Card, Form, Input, InputNumber, message, Modal, Select, Space, Steps} from "antd";
import {LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined} from "@ant-design/icons";
import {useRef, useState} from "react";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/lib/typography/Title";
import {
    ProFormDatePicker,
    ProFormDateRangePicker,
    ProFormDigit,
    ProFormMoney,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    StepsForm
} from "@ant-design/pro-components";
import {handleBaseApiResponse} from "../utils/requestUtils";
import useMessage from "antd/es/message/useMessage";
import {useForm} from "antd/es/form/Form";
import {addTask} from "../service/task";

export default function DemandTab() {
    const [current, setCurrent] = useState(0);

    const props = {
        style: {width: "100px", marginLeft: "-360px", marginTop: "37px"}, size: "small", labelPlacement: "vertical",
    }

    const type_items = [{key: 1, value: "数据标注"}, {key: 2, value: "程序外包"}, {key: 3, value: "图形创意"}];
    const category_item = {"数据标注": 1, "程序外包": 2, "图形创意": 3};
    const [messageApi, contextHolder] = message.useMessage();
    const formRef1 = useRef();
    const formRef2 = useRef();
    const formRef3 = useRef();

    const onFinish = async (values) => {
        values.category = category_item[values.category];
        values.duration = values.timeRange;
        let value = {...formRef1.current.getFieldsValue(), ...formRef2.current.getFieldsValue(), ...values};
        console.log(value)
        let res = await addTask(value);
        handleBaseApiResponse(res, messageApi, () => {
            formRef1.current?.resetFields();
            formRef2.current?.resetFields();
            formRef3.current?.resetFields();
            setCurrent(0)
        });
    }

    const filed_size = {minRows: 4, maxRows: 6};

    const detail = ['请发布你的需求', '请设置你的预算', '请设置你的标签'];
    const subdetail = ['需求越详细, 沟通越清晰', '越高的预算，越易被接单哦', '清晰的标签，匹配合适人才'];
    return <div className="md:flex shadow-lg"
                style={{
                    height: "620px",
                    width: "970px",
                    marginLeft: "auto",
                    marginRight: "200px",
                    marginTop: "38px",
                    marginBottom: "auto",
                    background: "#f5f5f5"
                }}>
        {contextHolder}
        <Card style={{width: "350px", background: "#f5f5f5"}}>
            <div style={{marginTop: "180px"}}>
                <h2 className="text-2xl  text-black sm:text-2xl md:text-2xl mb-2" style={{marginLeft: "35px"}}>
                    {detail[current]}
                </h2>
                <br></br>
                <p
                    className="max-w-md text-zinc-400 md:mt-6 md:text-sm md:leading-relaxed md:block"
                    style={{marginLeft: "125px", marginTop: "-18px"}}
                >
                    {subdetail[current]}
                </p>
            </div>
        </Card>
        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg"
             style={{height: "92%", width: "60%", marginTop: "19px", marginLeft: "2px", zIndex: "20"}}>
            <StepsForm stepsProps={props} current={current} onFinish={onFinish} onCurrentChange={(current) => {
                setCurrent(current);
            }}
                       submitter={{
                           render: (props) => {
                               if (props.step === 0) {
                                   return (<Button type="primary" onClick={async () => {
                                       try {
                                           await formRef1.current?.validateFields();
                                       } catch (error) {
                                           console.log(error);
                                           return;
                                       }
                                       setCurrent(current + 1)
                                   }}
                                                   style={{marginTop: "10px", marginRight: "0px"}}
                                   >
                                       下一步 {'>'}
                                   </Button>);
                               }

                               if (props.step === 1) {
                                   return <Space size={"large"} style={{marginTop: "10px"}}
                                   >
                                       <Button key="pre" onClick={() => setCurrent(current - 1)}>
                                           上一步
                                       </Button>
                                       <Button
                                           type="primary"
                                           key="goToTree"
                                           onClick={async () => {
                                               try {
                                                   await formRef2.current?.validateFields();
                                               } catch (error) {
                                                   console.log(error);
                                                   return;
                                               }
                                               setCurrent(current + 1)
                                           }}
                                       >
                                           去下一步 {'>'}
                                       </Button>
                                   </Space>;
                               }

                               return <Space size={"large"} style={{marginTop: "10px"}}>
                                   <Button key="gotoTwo" onClick={() => {
                                       setCurrent(current - 1)
                                   }}>
                                       {'<'} 上一步
                                   </Button> <Button
                                   type="primary"
                                   key="goToTree"
                                   onClick={async () => {
                                       try {
                                           await formRef3.current?.validateFields();
                                       } catch (error) {
                                           console.log(error);
                                           return;
                                       }
                                       props.onSubmit?.()
                                   }}
                               >
                                   提交 √
                               </Button>
                               </Space>;
                           },
                       }}
            >
                <StepsForm.StepForm formRef={formRef1} name="step1" title="需求" requiredMark={false}
                                    style={{marginTop: "-40px"}}
                >
                    <ProFormText label={"标题"} placeholder={"一句话描述你的需求(不超过20字)"}

                                 rules={[{required: true, message: "请填写标题"}, {
                                     max: 20, message: "标题请不要超过20个字"
                                 }, {min: 5, message: "标题请不要少于5个字"}]}
                                 name={['title']}
                    />
                    <br></br>
                    <ProFormTextArea
                        style={{maxHeight: "400px"}}
                        label="描述"
                        showCount
                        fieldProps={{autoSize: filed_size, showCount: true, count: {show: true, max: 200}}}
                        autoSize={{minRows: 2, maxRows: 2}}
                        maxLength={200}
                        rules={[{required: true, message: "请填写描述"}, {
                            min: 5, message: "描述请不要少于10个字"
                        }, {max: 200, message: "描述请不要多于200"}]}
                        name={['description']}
                    />
                </StepsForm.StepForm>
                <StepsForm.StepForm formRef={formRef2} name="step2" title={'预算'} requiredMark={false}>
                    <ProFormMoney min={50} label="预算(元)"
                                  rules={[{type: "number", message: "请填写一个数字"}, {
                                      required: true, message: "请填写预算"
                                  }]} name={['money']}/>
                </StepsForm.StepForm>
                <StepsForm.StepForm formRef={formRef3} name="step3" title={'类型'} requiredMark={false}>
                    <ProFormDatePicker
                        label="截止时间"
                        name={['timeRange']}
                    />
                    <ProFormSelect label="类型" options={type_items} name={['category']}/>
                </StepsForm.StepForm>
            </StepsForm>
        </div>
    </div>
}