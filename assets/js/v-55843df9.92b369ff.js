"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13941],{995584:(e,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-55843df9","path":"/devices/TS0601_gas_sensor_1.html","title":"TuYa TS0601_gas_sensor_1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_gas_sensor_1 control via MQTT","description":"Integrate your TuYa TS0601_gas_sensor_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-01-01T08:59:10.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas (binary)","slug":"gas-binary","link":"#gas-binary","children":[]},{"level":3,"title":"Self_test (binary)","slug":"self-test-binary","link":"#self-test-binary","children":[]},{"level":3,"title":"Self_test_result (enum)","slug":"self-test-result-enum","link":"#self-test-result-enum","children":[]},{"level":3,"title":"Fault_alarm (binary)","slug":"fault-alarm-binary","link":"#fault-alarm-binary","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1687679980000},"filePathRelative":"devices/TS0601_gas_sensor_1.md"}')},571033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var s=a(166252);const l=(0,s._)("h1",{id:"tuya-ts0601-gas-sensor-1",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#tuya-ts0601-gas-sensor-1","aria-hidden":"true"},"#"),(0,s.Uk)(" TuYa TS0601_gas_sensor_1")],-1),i=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th")])],-1),n=(0,s._)("tr",null,[(0,s._)("td",null,"Model"),(0,s._)("td",null,"TS0601_gas_sensor_1")],-1),o=(0,s._)("td",null,"Vendor",-1),d=(0,s._)("tr",null,[(0,s._)("td",null,"Description"),(0,s._)("td",null,"Gas sensor")],-1),r=(0,s._)("tr",null,[(0,s._)("td",null,"Exposes"),(0,s._)("td",null,"gas, self_test, self_test_result, fault_alarm, silence, linkquality")],-1),u=(0,s._)("tr",null,[(0,s._)("td",null,"Picture"),(0,s._)("td",null,[(0,s._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_gas_sensor_1.jpg",alt:"TuYa TS0601_gas_sensor_1"})])],-1),c=(0,s.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary" aria-hidden="true">#</a> Gas (binary)</h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="self-test-binary" tabindex="-1"><a class="header-anchor" href="#self-test-binary" aria-hidden="true">#</a> Self_test (binary)</h3><p>Indicates whether the device is being self-tested. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_test&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self_test is ON, if <code>false</code> OFF.</p><h3 id="self-test-result-enum" tabindex="-1"><a class="header-anchor" href="#self-test-result-enum" aria-hidden="true">#</a> Self_test_result (enum)</h3><p>Result of the self-test. Value can be found in the published state on the <code>self_test_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>success</code>, <code>failure</code>, <code>others</code>.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary" aria-hidden="true">#</a> Fault_alarm (binary)</h3><p>Indicates whether a fault was detected. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault_alarm is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),h={},_=(0,a(983744).Z)(h,[["render",function(e,t){const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.kq)(" !!!! "),(0,s.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,s.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,s.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,s.kq)(" !!!! "),l,(0,s._)("table",null,[i,(0,s._)("tbody",null,[n,(0,s._)("tr",null,[o,(0,s._)("td",null,[(0,s.Wm)(a,{to:"/supported-devices/#v=TuYa"},{default:(0,s.w5)((()=>[(0,s.Uk)("TuYa")])),_:1})])]),d,r,u])]),(0,s.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,s.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);