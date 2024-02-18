function BookLarge(props) {
    
    return (
      <>
        <div className="bg-white flex flex-col rounded-lg py-4 h-fit gap-4">
            <div className="flex flex-col gap-2 px-4 w-full">
                <div className="flex w-full items-center justify-center rounded-lg">
                    <img className="w-96 h-96 rounded-lg" src="" alt="" />
                </div>
                <div>
                    <div className="flex gap-2">
                        <div className="rounded-lg">
                            <img className="w-11 h-11 rounded-lg" src="" alt="" />
                        </div>
                        <div className="rounded-lg">
                            <img className="w-11 h-11 rounded-lg" src="" alt="" />
                        </div>
                        <div className="rounded-lg">
                            <img className="w-11 h-11 rounded-lg" src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 flex-col px-4">
                <div className="text-base font-semibold">
                    Đặc điểm nổi bật
                </div>
                <div className="text-sm flex flex-col gap-1">
                    <div className="flex gap-2 overflow-hidden">
                        <div className="flex items-center h-[21px] shrink-0">
                            <img className="w-4 h-4" src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" />
                        </div>
                        Câu chuyện cảm động về tình yêu và sự sống.
                    </div>
                    <div className="flex gap-2 overflow-hidden">
                        <div className="flex items-center h-[21px] shrink-0">
                            <img className="w-4 h-4" src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" />
                        </div>
                        Ngôn ngữ sâu sắc gần gũi và tinh tế.
                    </div>
                    <div className="flex gap-2 overflow-hidden">
                        <div className="flex items-center h-[21px] shrink-0">
                            <img className="w-4 h-4" src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" />
                        </div>
                        Được chuyển thể thành phim điện ảnh thành công.
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-neutral-300 px-4">
                <div className="text-sm flex items-center justify-between">
                    <img className="w-6 h-6" src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png" alt="" />
                    <div>
                        <span className="text-neutral-500">Xem thêm</span>
                        &nbsp;Tóm tắt nội dung sách
                    </div>
                </div>
                <img className="w-6 h-6" src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png" alt=""/>
            </div>
        </div>
      </>
    );
}
  
export default BookLarge;
  