
//快排1：此方法选取中间值作为参考值，且空间复杂度较高，不佳
var quickSort = function(data) {
　　if (data.length <= 1) { return data; }
　　var pivotIndex = Math.floor(data.length / 2);
　　var pivot = data.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < data.length; i++){
　　　　if (data[i] < pivot) {
　　　　　　left.push(data[i]);
　　　　} else {
　　　　　　right.push(data[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};

//快排2：三数取中法，长度小于10的数组序列采用插入排序
function quick_sort(data, left, right){
    if(left + 3 <= right) {
        var center = Math.floor((left + right) / 2);
        var pivot = getIndex(data, left, right), i = left, j = right - 1;
        while(1){
            while(data[++ i] < pivot) {}
            while(data[-- j] > pivot) {}
            if(i < j) {
                swap(data, i , j);
            } else {
                break;
            }
        }
        swap(data, i, right - 1);
        quick_sort(data, left, i - 1);
        quick_sort(data, i + 1, right);
    } else {
        insert_sort(data, left, right);
    }
}

//选取基准数：三数取中
function getIndex(data, left, right) {
    var center = Math.floor((left + right) / 2);
    //var center=left + ((right - left) >> 1);
    if(data[left] > data[center]) {
        swap(data, left, center);
    }
    if(data[left] > data[right]) {
        swap(data, left, right);
    }
    if(data[center] > data[right]) {
       swap(data, center, right);
    }   
    swap(data, center, right - 1);
    return data[right - 1];
}

function swap(dataay,i,j){
	var temp= dataay[i];
	dataay[i]= dataay[j];
	dataay[j]=temp;
}
//插入排序
function insert_sort(data, left, right){
    if(left < right){
        for(var i = 1; i < right - left + 1; i ++) {
            var temp = data[i];
            for(var j = i; j > 0 && data[j - 1] > temp; j --) {
                    data[j] = data[j - 1];
            }
            data[j] = temp;
        }
    }
    return data;
}
/*function swap(data,i,j){
	var temp= data[i];
	data[i]= data[j];
	data[j]=temp;
}*/
/*function media3(data, left, right) {
    var center = Math.floor((left + right) / 2);
    
    if(data[center] > data[right]) {
       swap(data, center, right);
    }   

    if(data[left] > data[right]) {
        swap(data, left, right);
    }

    if(data[left] < data[center]) {
        swap(data, left, center);
    }

    //swap(data, center, right);
    return data[left];  //使用left位置的元素作为枢轴
}*/

/*function media3(data,left,right)  
{  
    var mid = left + ((right - left) >> 1);//计算数组中间的元素的下标  
  
    //使用三数取中法选择枢轴  
    if(data[left] > data[mid]) {
        swap(data, left, mid);
    }
    if(data[left] > data[right]) {
        swap(data, left, right);
    }
    if(data[mid] > data[right]) {
       swap(data, mid, right);
    }   
    //left<center<right
    swap(data, mid, left);
    //此时，data[mid] <= data[left] <= data[right]  
    return data[left];  
    //left的位置上保存这三个位置中间的值  
    //分割时可以直接使用left位置的元素作为枢轴，而不用改变分割函数了  
}  

function quick_sort(data, left, right){
    //if(left + 3 <= right) {
        //var center = Math.floor((left + right) / 2);
        var pivot = media3(data, left, right), i = left, j = right ;

		while (i < j) {
			while (j > i && data[j] > pivot) {
				/*if (data[right] == pivot) //处理相等元素  
				{
					swap(data[right], data[right]);
					right--;
					rightLen++;
				}
				*/
			
		//		j--;
		//	}
			
		//	while (j > i && data[i] < pivot) {
				/*if (data[left] == pivot) {
					swap(data[left], data[left]);
					left++;
					leftLen++;
				}*/
		//		i++;
		//	}
			
		//	if(i<j){
			//	swap(data,i,j);
		//	}
			
		//}

		//swap(data, i, left);
		//quick_sort(data, left, i - 1);
      //  quick_sort(data, i + 1, right);

   // } else {
      //  insert_sort(data, left, right);
    //}

   // console.log(data);
//}



/*function insert_sort(data, left, right){
    if(left < right){
        for(var i = 1; i < right - left + 1; i ++) {
            var temp = data[i];
            for(var j = i; j > 0 && data[j - 1] > temp; j --) {
                    data[j] = data[j - 1];
            }
            data[j] = temp;
        }
    }
    return data;
}*/

var data=[1,3,26,10,35,25,4,6,12,2,47,33,23,14,53,13,5,8];
console.log(data.length);
quick_sort(data,0,data.length);
console.log(data);
