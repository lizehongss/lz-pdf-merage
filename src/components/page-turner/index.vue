<template>
    <div class="page-turner">
        <div class="page-reset page-icon" @click="handleActions('reset')" ></div>
        <div class="page-enlarge page-icon" :class="enlargeClass" @click="handleActions('zoomIn')" ></div>
        <div class="page-narrow page-icon"  :class="narrowClass" @click="handleActions('zoomOut')" ></div>
        <div class="page-first page-icon" :class="prevClass" @click="first"></div>
        <div class="page-second page-icon" :class="prevClass" @click="second"></div>
        <div class="page-num page-icon">{{current}}/{{total}}</div>
        <div class="page-third page-icon" :class="nextClass" @click="third"></div>
        <div class="page-fourth page-icon" :class="nextClass" @click="fourth"></div>
        <div class="page-anti-clockwise page-icon" title="逆时钟旋转"  @click="rotate('left')"></div>
        <div class="page-clockwise page-icon" title="顺时钟旋转" @click="rotate('right')"></div>
        <div class="page-print page-icon" title="打印" @click="print"></div>
    </div>
</template>
<script>
export default {
    props: {
        current: {
            type: Number
        },
        total: {
            type: Number
        },
        scale: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {
            setScale: 1
        }
    },
    methods: {
        print() {
            this.$emit("print")
        },
        rotate(val) {
            this.$emit('rotate', val)
        },
        first() {
            if (this.prevDisabled) return;
            this.$emit("update:current", 1);
        },
        second() {
            if (this.prevDisabled) return;
            this.$emit("update:current", this.current - 1);
        },
        third() {
            if (this.nextDisabled) return;
            this.$emit("update:current", this.current + 1);
        },
        fourth() {
            if (this.nextDisabled) return;
            this.$emit("update:current", this.total);
        },
        handleActions(type) {
            if (type === 'reset') {
                this.setScale = 1
            } else if (type === 'zoomIn') {
                if(this.setScale === 4) return
                this.setScale +=0.5
            } else if(type === 'zoomOut') {
                if(this.setScale === 0.5) return
                this.setScale -=0.5
            }
            this.$emit("handleZoom",this.setScale)    
        },
    },
    computed: {
        prevDisabled() {
            return this.current <= 1;
        },
        nextDisabled() {
            return this.current >= this.total;
        },
        prevClass() {
            return {
                    "page-disabled": this.prevDisabled
                }
        },
        nextClass() {
            return {
                "page-disabled": this.nextDisabled
            }
        },
        enlargeClass() {
            return {
                "page-disabled":   this.setScale>= this.scale
            }
        },
        narrowClass() {
            return {
                 "page-disabled":  this.setScale <= .5
            }
        }
    }
    
}
</script>
<style>
.page-turner{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.page-icon{
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    margin: 0 10px;
}
.page-icon:hover{
    cursor: pointer;

}
.page-disabled:hover{
    cursor: not-allowed;
}
.page-num{
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    width: 120px;
    display: inline-block;
    vertical-align: middle;
}
.page-reset{
    background: url("../../images/reset.png") no-repeat center center;

}
.page-reset:hover{
    background: url("../../images/reset-hover.png") no-repeat center center;
}
.page-enlarge{
    background: url("../../images/enlarge.png") no-repeat center center;
}
.page-enlarge:hover{
    background: url("../../images/enlarge-hover.png") no-repeat center center;

}
.page-narrow{
    background: url("../../images/narrow.png") no-repeat center center;

}
.page-narrow:hover{
    background: url("../../images/narrow-hover.png") no-repeat center center;

}
.page-first{
    background: url("../../images/first.png") no-repeat center center;

}
.page-first:hover{
    background: url("../../images/first-hover.png") no-repeat center center;

}
.page-second{
    background: url("../../images/second.png") no-repeat center center;

}
.page-second:hover{
    background: url("../../images/second-hover.png") no-repeat center center;
}
.page-third{
    background: url("../../images/third.png") no-repeat center center;

}
.page-third:hover{
    background: url("../../images/third-hover.png") no-repeat center center;

}
.page-fourth{
    background: url("../../images/fourth.png") no-repeat center center;
}
.page-fourth:hover{
    background: url("../../images/fourth-hover.png") no-repeat center center;
}
.page-print{
    background: url("../../images/print.png") no-repeat center center;

}
.page-print:hover{
    background: url("../../images/print-hover.png") no-repeat center center;

}
.page-anti-clockwise{
    background: url("../../images/anti-clockwise.png") no-repeat center center;

}
.page-anti-clockwise:hover{
    background: url("../../images/anti-clockwise-hover.png") no-repeat center center;

}
.page-clockwise{
    background: url("../../images/clockwise.png") no-repeat center center;

}
.page-clockwise:hover{
    background: url("../../images/clockwise-hover.png") no-repeat center center;

}

</style>