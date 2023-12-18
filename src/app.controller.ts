import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    console.log('type', type);
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportsById(@Param('type') type: string, @Param('id') id: string) {
    console.log(type, id);
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    console.log('data', data);
    return data.report
      .filter((report) => {
        return report.type === reportType;
      })
      .find((report) => {
        return report.id === id;
      });
  }

  @Put(':id')
  updateReportById() {
    return 'updated';
  }

  @Delete(':id')
  deleteReportById() {
    return 'deleted';
  }

  @Post('/create')
  createReport() {
    return 'created';
  }
}
