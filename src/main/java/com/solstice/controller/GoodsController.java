package com.solstice.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.solstice.bean.Goods;
import com.solstice.bean.GoodsCatalog;
import com.solstice.bean.Result;
import com.solstice.bean.ResultCode;
import com.solstice.exception.UserException;
import com.solstice.service.GoodsService;

@Controller
@RequestMapping(value = "/goods")
public class GoodsController {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(GoodsController.class);

	@Autowired
	private GoodsService goodService;

	private static final int PAGAE_LEN = 5;

	/**
	 * 获取分页页数
	 * 
	 * @param request
	 * @param catalog
	 * @return
	 */
	@RequestMapping(value = "/catalog/size")
	public String getCatalogPageSize(HttpServletRequest request, int catalog) {
		Result result = null;
		try {
			int sum = goodService.getCatalogGoodsSum(catalog);

			if (sum <= 0) {
				result = new Result(ResultCode.FAIL, "暂无"
						+ GoodsCatalog.valueOf(catalog) + "类商品", 0);
			} else {
				int pageSzie = sum / PAGAE_LEN + 1;
				result = new Result(ResultCode.SUCESS, "获取商品分页数", pageSzie);
			}
		} catch (UserException e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			LOGGER.info(e.getMessage());
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			e.printStackTrace();
		}

		request.setAttribute("message", result.toString());

		return "message";
	}

	/**
	 * 获取单个类别的商品(分页)
	 *
	 * @param index
	 * @param request
	 * @param catalog
	 * @return
	 */
	@RequestMapping(value = "/catalog/page")
	public String getCatalogGoodsPage(HttpServletRequest request, int index,
			int catalog) {
		Result result = null;
		try {
			// 前端需要输入的index必须大于0
			int start = (index - 1) * PAGAE_LEN;
			int length = PAGAE_LEN;
			List<Goods> list = goodService.getCatalogGoodsPage(start, length,
					catalog);

			if (list == null) {
				result = new Result(ResultCode.FAIL, "获取对象为空", null);
			} else if (list.size() == 0) {
				result = new Result(ResultCode.SUCESS, "暂无"
						+ GoodsCatalog.valueOf(catalog) + "类商品", list);
			} else {
				result = new Result(ResultCode.SUCESS, String.format("获取"
						+ GoodsCatalog.valueOf(catalog) + "类第%s页商品", index),
						list);
			}
		} catch (UserException e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			LOGGER.info(e.getMessage());
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 获取指定类型商品的前十条数据
	 * 
	 * @param request
	 * @param catalog
	 * @return
	 */
	@RequestMapping(value = "/catalog/top10")
	public String getCatalogGoodsTop10(HttpServletRequest request, int catalog) {
		Result result = null;
		try {
			List<Goods> list = goodService.getCatalogGoodsTop10(catalog);

			if (list == null) {
				result = new Result(ResultCode.FAIL, "获取对象为空", null);
			} else if (list.size() == 0) {
				result = new Result(ResultCode.SUCESS, "暂无"
						+ GoodsCatalog.valueOf(catalog) + "类商品", list);
			} else {
				result = new Result(ResultCode.SUCESS, "获取"
						+ GoodsCatalog.valueOf(catalog) + "类商品TOP 10", list);
			}
		} catch (UserException e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			LOGGER.info(e.getMessage());
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 商品搜索
	 * 
	 * @param request
	 * @param key
	 * @return
	 */
	@RequestMapping(value = "/search")
	public String findGoodsByKey(HttpServletRequest request, String key) {
		Result result = null;
		try {
			// 前端需要限定输入的关键字不能为空
			List<Goods> list = goodService.findGoodsByKey(key);

			if (list == null) {
				result = new Result(ResultCode.FAIL, "获取对象为空", null);
			} else if (list.size() == 0) {
				result = new Result(ResultCode.SUCESS, "找不到与\"" + key
						+ "\"相关的商品", list);
			} else {
				result = new Result(ResultCode.SUCESS, "获取与\"" + key
						+ "\"相关的商品", list);
			}

		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), null);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 添加商品
	 * 
	 * @param request
	 * @param goods
	 * @return
	 */
	@RequestMapping(value = "/add")
	public String addGoods(HttpServletRequest request, Goods goods) {
		Result result = null;
		System.out.println("\n\n\n\n" + goods);
		try {
			goodService.addGoods(goods);
			result = new Result(ResultCode.SUCESS, "添加成功", true);
		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 删除商品
	 * 
	 * @param request
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/delete")
	public String deleteGoods(HttpServletRequest request, int id) {
		Result result = null;
		try {
			goodService.deleteGoods(id);
			result = new Result(ResultCode.SUCESS, "删除成功", true);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 更新name字段
	 * 
	 * @param request
	 * @param goods
	 * @return
	 */
	@RequestMapping(value = "/update/name")
	public String updateName(HttpServletRequest request, Goods goods) {
		Result result = null;
		try {
			goodService.updateName(goods);
			result = new Result(ResultCode.SUCESS, "商品名称更新成功", true);
		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 更新detail字段
	 * 
	 * @param request
	 * @param goods
	 * @return
	 */
	@RequestMapping(value = "/update/detail")
	public String updateDetail(HttpServletRequest request, Goods goods) {
		Result result = null;
		try {
			goodService.updateDetail(goods);
			result = new Result(ResultCode.SUCESS, "商品详情更新成功", true);
		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 更新price字段
	 * 
	 * @param request
	 * @param goods
	 * @return
	 */
	@RequestMapping(value = "/update/price")
	public String updatePrice(HttpServletRequest request, Goods goods) {
		Result result = null;
		try {
			goodService.updatePrice(goods);
			result = new Result(ResultCode.SUCESS, "商品价格更新成功", true);
		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 更新catalog字段
	 * 
	 * @param request
	 * @param goods
	 * @return
	 */
	@RequestMapping(value = "/update/catalog")
	public String updateCatalog(HttpServletRequest request, Goods goods) {
		Result result = null;
		try {
			goodService.updateCatalog(goods);
			result = new Result(ResultCode.SUCESS, "商品分类更新成功", true);
		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	/**
	 * 更新url字段
	 * 
	 * @param request
	 * @param goods
	 * @return
	 */
	@RequestMapping(value = "/update/url")
	public String updateUrl(HttpServletRequest request, Goods goods) {
		Result result = null;
		try {
			goodService.updateUrl(goods);
			result = new Result(ResultCode.SUCESS, "商品链接更新成功", true);
		} catch (UserException e) {
			LOGGER.info(e.getMessage());
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
		} catch (Exception e) {
			result = new Result(ResultCode.FAIL, e.getMessage(), false);
			e.printStackTrace();
		}
		request.setAttribute("message", result.toString());
		return "message";
	}

	@Test
	public void testEnumGoods() {
		int i = GoodsCatalog.HOUSEHOLD.value();
		System.out.println(i);
		GoodsCatalog str = GoodsCatalog.valueOf(i);
		System.out.println(str);
	}

}
