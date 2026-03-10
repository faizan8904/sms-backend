const db = require('../config/db');

const timetableService = {

    // Create timetable
    async createTimetable(data) {
        const query = `
        INSERT INTO timetables
        (
            timetable_id,
            school_id,
            class_id,
            section_id,
            academic_year,
            timetable_name,
            total_periods_per_day,
            period_duration_minutes,
            break_periods,
            working_days,
            start_time,
            end_time,
            teacher_conflict_check,
            classroom_conflict_check,
            status,
            is_published,
            created_by,
            created_at,
            updated_at
        )
        VALUES
        (
            gen_random_uuid(), $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,NOW(),NOW()
        )
        RETURNING *`;

        const values = [
            data.school_id,
            data.class_id,
            data.section_id,
            data.academic_year,
            data.timetable_name,
            data.total_periods_per_day,
            data.period_duration_minutes,
            data.break_periods || null,
            data.working_days,
            data.start_time,
            data.end_time,
            data.teacher_conflict_check || false,
            data.classroom_conflict_check || false,
            data.status || 'active',
            data.is_published || false,
            data.created_by
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Get timetables by class & section
    async getTimetablesByClassSection(class_id, section_id) {
        const result = await db.query(
            `SELECT * FROM timetables WHERE class_id=$1 AND section_id=$2 ORDER BY timetable_name`,
            [class_id, section_id]
        );
        return result.rows;
    },

    // Get timetable by ID
    async getTimetableById(timetable_id) {
        const result = await db.query(
            `SELECT * FROM timetables WHERE timetable_id=$1`,
            [timetable_id]
        );
        return result.rows[0];
    },

    // Update timetable
    async updateTimetable(timetable_id, data) {
        const query = `
        UPDATE timetables
        SET
            timetable_name=$1,
            total_periods_per_day=$2,
            period_duration_minutes=$3,
            break_periods=$4,
            working_days=$5,
            start_time=$6,
            end_time=$7,
            teacher_conflict_check=$8,
            classroom_conflict_check=$9,
            status=$10,
            is_published=$11,
            updated_at=NOW()
        WHERE timetable_id=$12
        RETURNING *`;

        const values = [
            data.timetable_name,
            data.total_periods_per_day,
            data.period_duration_minutes,
            data.break_periods || null,
            data.working_days,
            data.start_time,
            data.end_time,
            data.teacher_conflict_check || false,
            data.classroom_conflict_check || false,
            data.status || 'active',
            data.is_published || false,
            timetable_id
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Delete timetable
    async deleteTimetable(timetable_id) {
        const result = await db.query(
            `DELETE FROM timetables WHERE timetable_id=$1 RETURNING *`,
            [timetable_id]
        );
        return result.rows[0];
    }
};

module.exports = timetableService;